package com.senai.infoa.projetointegrador.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name="atividade")
public class Atividade {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="nome")
    private String nome;

    @Column(name="descricao")
    private String descricao;

    @Column(name="personagem")
    private Integer personagem;

    @Column(name="audio")
    private String audio;


    @ManyToOne
    @JoinColumn(name = "id_feedback")
    private Feedback feedback;

    @ManyToOne
    @JoinColumn(name = "id_conquista")
    private Conquista conquista;

    

    public Atividade() {

    }

    public Atividade(Integer id, String nome, String descricao, Integer personagem, Feedback feedback, String audio,
            Conquista conquista) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.personagem = personagem;
        this.feedback = feedback;
        this.conquista = conquista;
        this.audio = audio;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getPersonagem() {
        return personagem;
    }

    public void setPersonagem(Integer personagem) {
        this.personagem = personagem;
    }

    public Feedback getFeedback() {
        return feedback;
    }

    public void setFeedback(Feedback feedback) {
        this.feedback = feedback;
    }

    public Conquista getConquista() {
        return conquista;
    }

    public void setConquista(Conquista conquista) {
        this.conquista = conquista;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }
}