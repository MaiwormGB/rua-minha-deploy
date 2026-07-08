package com.senai.infoa.projetointegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.senai.infoa.projetointegrador.models.Conquista;
import com.senai.infoa.projetointegrador.services.ConquistaService;


@RestController
@RequestMapping("/Conquista")
public class ConquistaController {
    
    @Autowired
    private ConquistaService conquistaService;

    @GetMapping("/contar-conquistas")
    public Long contarConquistas() {
        return conquistaService.contarConquista();
    }

    @GetMapping("/buscar-conquista/{id}")
    public Conquista buscarConquista(@PathVariable Integer id) {
        return conquistaService.buscarConquista(id);
    }

    @GetMapping("/listar-conquistas")
    public List<Conquista> listarConquistas() {
        return conquistaService.listarConquistas();
    }
    
    @DeleteMapping("/deletar-conquista/{id}")
    public String deletarConquista(@PathVariable Integer id) {
        if (conquistaService.deletarConquista(id)) {
            return "Conquista removida com sucesso.";
        }
        return "Falha ao remover conquista.";
    }

    @PostMapping("/salvar-conquista")
    public Conquista cadastrarConquista(@RequestBody Conquista conquista) {
        return conquistaService.cadastrarConquista(conquista);
    }

    @PutMapping("/atualizar-conquista/{id}")
    public String atualizarConquista(@PathVariable Integer id, @RequestBody Conquista conquista) {
       if (conquistaService.atualizarConquista(id, conquista) != null) {
          return "Conquista atualizada com sucesso.";
       }
        
        return "Falha ao atualizar conquista.";
    }
    
}