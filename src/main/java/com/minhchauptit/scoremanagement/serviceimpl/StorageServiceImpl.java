package com.minhchauptit.scoremanagement.serviceimpl;


import com.minhchauptit.scoremanagement.exception.StorageException;
import com.minhchauptit.scoremanagement.service.StorageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.logging.Logger;

@Service
public class StorageServiceImpl implements StorageService {

    private Logger logger = Logger.getLogger(getClass().getName());

    private String uploadPath = System.getProperty("user.home")+ File.separator +"upload";

    @PostConstruct
    public void createDir(){
        File file = new File(uploadPath);
        if(!file.exists()){
            file.mkdir();
            logger.info("Make directory: "+file.getAbsolutePath());
        }
        else{
            logger.info("Directory for save file already exists: "+file.getAbsolutePath());
        }
    }

    @Override
    public String uploadFile(MultipartFile file) {
        if(file.isEmpty()) throw new StorageException("File is empty");
        String fileName = file.getOriginalFilename();
        try {
            InputStream inputStream = file.getInputStream();
            Path path = Paths.get(uploadPath+File.separator+fileName);
            Files.copy(inputStream, path,StandardCopyOption.REPLACE_EXISTING);
            return path.toAbsolutePath().toString();
        } catch (IOException e) {
            throw new StorageException("Failed to upload file",e);
        }
    }
}
