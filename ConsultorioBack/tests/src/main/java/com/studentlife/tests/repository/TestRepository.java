package com.studentlife.tests.repository;

import com.studentlife.tests.entity.CHTEtest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<CHTEtest, Long> {
}
