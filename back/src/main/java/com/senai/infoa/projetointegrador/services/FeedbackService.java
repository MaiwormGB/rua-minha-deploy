package com.senai.infoa.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.infoa.projetointegrador.models.Feedback;
import com.senai.infoa.projetointegrador.repositories.FeedbackRepository;

@Service
public class FeedbackService {
    
    private final FeedbackRepository feedbackRepository;

    @Autowired
    private FeedbackRepository usuarioRepository;

    FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public Long contarFeedback() {
        return feedbackRepository.count();
    }

    public Feedback buscarFeedback(Integer id){
        return usuarioRepository.findById(id).get();
    }

    public List<Feedback> listarFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Boolean deletarFeedback(Integer id){
        if (feedbackRepository.existsById(id)) {
           feedbackRepository.deleteById(id);
           return true; 
        }
        return true;
    }

    public Feedback cadastrarFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public Feedback atualizarFeedback(Integer id, Feedback feedback){
        Feedback feedbackRecuperado = buscarFeedback(id);

        if (feedbackRecuperado != null) {
            feedbackRecuperado.setId(id);

            if (feedback.getTitulo() != null) {
                feedbackRecuperado.setTitulo(feedback.getTitulo());
            }

            return feedbackRepository.save(feedbackRecuperado);
        }

        return null;
    }
}
