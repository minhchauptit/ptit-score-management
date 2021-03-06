package com.minhchauptit.scoremanagement.repository;

import com.minhchauptit.scoremanagement.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SubjectRepository extends JpaRepository<Subject,Integer> {
    Optional<Subject> findBySubjectId(String subjectId);
}
