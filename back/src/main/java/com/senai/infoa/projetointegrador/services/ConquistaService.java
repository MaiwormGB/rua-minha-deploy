package com.senai.infoa.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.infoa.projetointegrador.models.Conquista;
import com.senai.infoa.projetointegrador.repositories.ConquistaRepository;

@Service
public class ConquistaService {
    
    private final ConquistaRepository conquistaRepository;

    @Autowired
    private ConquistaRepository usuarioRepository;

    ConquistaService(ConquistaRepository conquistaRepository) {
        this.conquistaRepository = conquistaRepository;
    }

    public Long contarConquista() {
        return conquistaRepository.count();
    }

    public Conquista buscarConquista(Integer id){
        return usuarioRepository.findById(id).get();
    }

    public List<Conquista> listarConquistas() {
        return conquistaRepository.findAll();
    }

    public Boolean deletarConquista(Integer id){
        if (conquistaRepository.existsById(id)) {
           conquistaRepository.deleteById(id);
           return true; 
        }
        return true;
    }

    public Conquista cadastrarConquista(Conquista conquista) {
        return conquistaRepository.save(conquista);
    }

    public Conquista atualizarConquista(Integer id, Conquista conquista){
        Conquista conquistaRecuperado = buscarConquista(id);

        if (conquistaRecuperado != null) {
            conquistaRecuperado.setId(id);

            if (conquista.getNome() != null) {
                conquistaRecuperado.setNome(conquista.getNome());
            }

            return conquistaRepository.save(conquistaRecuperado);
        }

        return null;
    }
}
