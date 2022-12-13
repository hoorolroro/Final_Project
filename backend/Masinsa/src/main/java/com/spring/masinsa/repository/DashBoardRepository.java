package com.spring.masinsa.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.DashBoard;

@Repository
public interface DashBoardRepository extends JpaRepository<DashBoard, LocalDateTime> {
	public DashBoard findDashBoardByDate(LocalDateTime date);
}
