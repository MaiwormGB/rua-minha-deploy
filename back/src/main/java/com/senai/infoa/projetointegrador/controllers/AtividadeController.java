package com.senai.infoa.projetointegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.infoa.projetointegrador.models.Atividade;
import com.senai.infoa.projetointegrador.services.AtividadeService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/Atividade")
public class AtividadeController {
    
    @Autowired
    private AtividadeService atividadeService;

    @GetMapping("/contar-atividades")
    public Long contarAtividades() {
        return atividadeService.contarAtividade();
    }

    @GetMapping("/buscar-atividade/{id}")
    public Atividade buscarAtividade(@PathVariable Integer id) {
        return atividadeService.buscarAtividade(id);
    }

    @GetMapping("/listar-atividades")
    public List<Atividade> listarAtividades() {
        return atividadeService.listarAtividades();
    }
    
    @DeleteMapping("/deletar-atividade/{id}")
    public String deletarAtividade(@PathVariable Integer id) {
        if (atividadeService.deletarAtividade(id)) {
            return "Atividade removida com sucesso.";
        }
        return "Falha ao remover atividade.";
    }

    @PostMapping("/salvar-atividade")
    public Atividade cadastrarAtividade(@RequestBody Atividade atividade) {
        return atividadeService.cadastrarAtividade(atividade);
    }

    @PutMapping("/atualizar-atividade/{id}")
    public String atualizarAtividade(@PathVariable Integer id, @RequestBody Atividade atividade) {
       if (atividadeService.atualizarAtividade(id, atividade) != null) {
          return "Atividade atualizada com sucesso.";
       }
        
        return "Falha ao atualizar atividade.";
    }
    
}
