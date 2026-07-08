package com.senai.infoa.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.infoa.projetointegrador.models.Tag;
import com.senai.infoa.projetointegrador.repositories.TagRepository;

@Service
public class TagService {
    
    private final TagRepository tagRepository;

    @Autowired
    private TagRepository usuarioRepository;

    TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Long contarTag() {
        return tagRepository.count();
    }

    public Tag buscarTag(Integer id){
        return usuarioRepository.findById(id).get();
    }

    public List<Tag> listarTags() {
        return tagRepository.findAll();
    }

    public Boolean deletarTag(Integer id){
        if (tagRepository.existsById(id)) {
           tagRepository.deleteById(id);
           return true; 
        }
        return true;
    }

    public Tag cadastrarTag(Tag tag) {
        return tagRepository.save(tag);
    }


}