package com.studentlife.tests.repository;

import com.studentlife.tests.entity.Results;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<Results, Long> {
        Results findByTestIdAndAspecto(Long idTest, String aspecto);

        List<Results> findAllByTestId(Long idTest);


}
