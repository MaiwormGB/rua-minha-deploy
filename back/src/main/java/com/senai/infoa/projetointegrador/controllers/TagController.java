package com.senai.infoa.projetointegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.infoa.projetointegrador.models.Tag;
import com.senai.infoa.projetointegrador.services.TagService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/tag")
public class TagController {
    
    @Autowired
    private TagService tagService;

    @GetMapping("/contar-tags")
    public Long contarTags() {
        return tagService.contarTag();
    }

    @GetMapping("/buscar-tag/{id}")
    public Tag buscarTag(@PathVariable Integer id) {
        return tagService.buscarTag(id);
    }

    @GetMapping("/listar-tags")
    public List<Tag> listarTags() {
        return tagService.listarTags();
    }
    
    @DeleteMapping("/deletar-tag/{id}")
    public String deletarTag(@PathVariable Integer id) {
        if (tagService.deletarTag(id)) {
            return "Tag removida com sucesso.";
        }

        return "Falha ao remover tag.";
    }

    @PostMapping("/salvar-tag")
    public Tag cadastrarTag(@RequestBody Tag tag) {
        return tagService.cadastrarTag(tag);
    }


    
}