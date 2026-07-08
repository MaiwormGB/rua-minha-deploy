package com.senai.infoa.projetointegrador.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nome")
    private String nome;

    @Column(name="titulo")
    private String titulo;

    @ManyToMany
    @JoinTable(
    name = "tag_atividade", // Nome da tabela que será criada no banco
    joinColumns = @JoinColumn(name = "tag_id"), // Chave estrangeira desta classe (UsuarioAtividade)
    inverseJoinColumns = @JoinColumn(name = "atividade_id") // Chave estrangeira da outra classe (Atividade)
    )
    private List<Atividade> atividade;

    public Tag() {}

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

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}
