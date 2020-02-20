package com.minhchauptit.scoremanagement.rest;

import com.minhchauptit.scoremanagement.dto.StudentDTO;
import com.minhchauptit.scoremanagement.entity.Student;
import com.minhchauptit.scoremanagement.service.StudentService;
import com.minhchauptit.scoremanagement.util.bean.StudentBeanUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentRestController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public List<Student> getStudents(){
        return studentService.findAll();
    }

    @GetMapping("/students/{studentId}")
    public Student getStudent(@PathVariable(name = "studentId") Integer studentId){
        return studentService.findById(studentId);
    }

    @GetMapping("/students/search/{param}")
    public List<StudentDTO> findStudentsByStudentIdLikeOrFullNameLike(@PathVariable("param") String param){
        param = param.trim();
        List<Student> students = studentService.findStudentsByStudentIdLikeOrFullNameLike(param);
        List<StudentDTO> result = new ArrayList<>();
        for(Student student:students){
            result.add(StudentBeanUtil.entity2DTO(student));
        }
        return result;
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student){
        return studentService.save(student);
    }

    @PutMapping("/students")
    public Student updateStudent(@RequestBody Student student){
        return studentService.save(student);
    }

    @DeleteMapping("/students/{studentId}")
    public String deleteStudent(@PathVariable(name = "studentId") Integer id){
        Student student = studentService.findById(id);
        studentService.delete(id);
        return "Delete success student: "+student.getId()+"/"+student.getStudentId();
    }

    @DeleteMapping("/students/all")
    public String deleteAllStudents(){
        studentService.deleteAll();
        return "Delete all successfully";
    }




}
