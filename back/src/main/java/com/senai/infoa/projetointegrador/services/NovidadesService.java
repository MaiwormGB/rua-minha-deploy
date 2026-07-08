package com.senai.infoa.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.infoa.projetointegrador.models.Novidades;
import com.senai.infoa.projetointegrador.repositories.NovidadesRepository;

@Service
public class NovidadesService {

    @Autowired
    private NovidadesRepository novidadesRepository;

    public Novidades buscarNovidade(Integer id) {
        return novidadesRepository.findById(id).orElse(null);
    }

    public List<Novidades> listarNovidades() {
        return novidadesRepository.findAll();
    }

    public Boolean deletarNovidade(Integer id) {
        if (novidadesRepository.existsById(id)) {
            novidadesRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Novidades cadastrarNovidade(Novidades novidade) {
        return novidadesRepository.save(novidade);
    }

    public Novidades atualizarNovidade(Integer id, Novidades novidade) {
        Novidades novidadeRecuperada = buscarNovidade(id);

        if (novidadeRecuperada == null) {
            return null;
        }

        if (novidade.getTitulo() != null) {
            novidadeRecuperada.setTitulo(novidade.getTitulo());
        }

        return novidadesRepository.save(novidadeRecuperada);
    }
}

