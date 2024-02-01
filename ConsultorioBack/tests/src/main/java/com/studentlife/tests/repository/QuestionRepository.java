package com.studentlife.tests.repository;

import com.studentlife.tests.entity.Questions;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Questions, Long> {
    List<Questions> findAllByTestId(Long idTest);
}
