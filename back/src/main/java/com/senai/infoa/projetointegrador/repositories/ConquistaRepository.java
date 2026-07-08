package com.senai.infoa.projetointegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.infoa.projetointegrador.models.Conquista;

@Repository
public interface ConquistaRepository extends JpaRepository<Conquista, Integer> {

}
