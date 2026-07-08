package com.senai.infoa.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.infoa.projetointegrador.models.Atividade;
import com.senai.infoa.projetointegrador.repositories.AtividadeRepository;

@Service
public class AtividadeService {
    
    private final AtividadeRepository atividadeRepository;

    @Autowired
    private AtividadeRepository usuarioRepository;

    AtividadeService(AtividadeRepository atividadeRepository) {
        this.atividadeRepository = atividadeRepository;
    }

    public Long contarAtividade() {
        return atividadeRepository.count();
    }

    public Atividade buscarAtividade(Integer id){
        return usuarioRepository.findById(id).get();
    }

    public List<Atividade> listarAtividades() {
        return atividadeRepository.findAll();
    }

    public Boolean deletarAtividade(Integer id){
        if (atividadeRepository.existsById(id)) {
           atividadeRepository.deleteById(id);
           return true; 
        }
        return true;
    }

    public Atividade cadastrarAtividade(Atividade atividade) {
        return atividadeRepository.save(atividade);
    }

    public Atividade atualizarAtividade(Integer id, Atividade atividade){
        Atividade atividadeRecuperado = buscarAtividade(id);

        if (atividadeRecuperado != null) {
            atividadeRecuperado.setId(id);

            if (atividade.getNome() != null) {
                atividadeRecuperado.setNome(atividade.getNome());
            }

            return atividadeRepository.save(atividadeRecuperado);
        }

        return null;
    }
}
