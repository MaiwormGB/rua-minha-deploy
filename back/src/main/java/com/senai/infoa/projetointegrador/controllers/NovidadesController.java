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

import com.senai.infoa.projetointegrador.models.Novidades;
import com.senai.infoa.projetointegrador.services.NovidadesService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/Novidades")
public class NovidadesController {
     @Autowired
    private NovidadesService novidadesService;


    @GetMapping("/buscar-novidade/{id}")
    public Novidades buscarNovidade(@PathVariable Integer id) {
        return novidadesService.buscarNovidade(id);
    }

    @GetMapping("/listar-novidades")
    public List<Novidades> listarNovidades() {
        return novidadesService.listarNovidades();
    }

    @DeleteMapping("/deletar-novidade/{id}")
    public String deletarNovidade(@PathVariable Integer id) {
        if (novidadesService.deletarNovidade(id)) {
            return "Novidade removida com sucesso.";
        }
        return "Falha ao remover novidade.";
    }

    @PostMapping("/salvar-novidade")
    public Novidades cadastrarNovidade(@RequestBody Novidades novidade) {
        return novidadesService.cadastrarNovidade(novidade);
    }

    @PutMapping("/atualizar-novidade/{id}")
    public String atualizarNovidade(@PathVariable Integer id, @RequestBody Novidades novidade) {
        if (novidadesService.atualizarNovidade(id, novidade) != null) {
            return "Novidade atualizada com sucesso.";
        }

        return "Falha ao atualizar novidade.";
    }
}
