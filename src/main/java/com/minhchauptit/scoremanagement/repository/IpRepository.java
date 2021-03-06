package com.minhchauptit.scoremanagement.repository;

import com.minhchauptit.scoremanagement.entity.Ip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IpRepository extends JpaRepository<Ip,Integer> {
    Optional<Ip> findByIp(String ip);
}
