package com.minhchauptit.scoremanagement.serviceimpl;

import com.minhchauptit.scoremanagement.entity.ScoreDetail;
import com.minhchauptit.scoremanagement.repository.ScoreDetailRepository;
import com.minhchauptit.scoremanagement.service.ScoreDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ScoreDetailServiceImpl implements ScoreDetailService {

    @Autowired
    private ScoreDetailRepository scoreDetailRepository;
    @Override
    public void saveScoreDetail(ScoreDetail scoreDetail) {
        scoreDetailRepository.save(scoreDetail);
    }

    @Override
    public void deleteById(Integer id) {
        scoreDetailRepository.deleteById(id);
    }

    @Override
    public List<Integer> findDistinctSemester() {
        return scoreDetailRepository.findDistinctSemester();
    }

    @Override
    public List<ScoreDetail> findScoreDetailByStudentIdAndSemester(String studentId, Integer semester) {
        return scoreDetailRepository.findScoreDetailByStudentStudentIdAndSemester(studentId,semester);
    }
}