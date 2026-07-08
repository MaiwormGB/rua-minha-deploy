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

import com.senai.infoa.projetointegrador.models.Feedback;
import com.senai.infoa.projetointegrador.services.FeedbackService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    
    @Autowired
    private FeedbackService feedbackService;

    @GetMapping("/contar-feedbacks")
    public Long contarFeedbacks() {
        return feedbackService.contarFeedback();
    }

    @GetMapping("/buscar-feedback/{id}")
    public Feedback buscarFeedback(@PathVariable Integer id) {
        return feedbackService.buscarFeedback(id);
    }

    @GetMapping("/listar-feedbacks")
    public List<Feedback> listarFeedbacks() {
        return feedbackService.listarFeedbacks();
    }
    
    @DeleteMapping("/deletar-feedback/{id}")
    public String deletarFeedback(@PathVariable Integer id) {
        if (feedbackService.deletarFeedback(id)) {
            return "Feedback removido com sucesso.";
        }

        return "Falha ao remover feedback.";
    }

    @PostMapping("/salvar-feedback")
    public Feedback cadastrarFeedback(@RequestBody Feedback feedback) {
        return feedbackService.cadastrarFeedback(feedback);
    }

    @PutMapping("/atualizar-feedback/{id}")
    public String atualizarFeedback(
            @PathVariable Integer id,
            @RequestBody Feedback feedback) {

       if (feedbackService.atualizarFeedback(id, feedback) != null) {
          return "Feedback atualizado com sucesso.";
       }
        
        return "Falha ao atualizar feedback.";
    }
    
}