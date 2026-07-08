package com.senai.infoa.projetointegrador.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToMany
    @JoinTable(
    name = "usuario_atividade", // Nome da tabela que será criada no banco
    joinColumns = @JoinColumn(name = "usuario_id"), // Chave estrangeira desta classe (UsuarioAtividade)
    inverseJoinColumns = @JoinColumn(name = "atividade_id") // Chave estrangeira da outra classe (Atividade)
    )
    private List<Atividade> atividade;

    @ManyToMany
    @JoinTable(
    name = "usuario_conquista", // Nome da tabela que será criada no banco
    joinColumns = @JoinColumn(name = "usuario_id"), // Chave estrangeira desta classe (UsuarioAtividade)
    inverseJoinColumns = @JoinColumn(name = "conquista_id") // Chave estrangeira da outra classe (Atividade)
    )
    private List<Conquista> conquista;

    @Column(name = "nome_responsavel")
    private String nomeResponsavel;

    @Column(name = "email")
    private String email;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "senha")
    private String senha;

    @Column(name = "nome_crianca")
    private String nomeCrianca;

    @Column(name = "idade_crianca")
    private Integer idadeCrianca;

    @Column(name = "xp")
    private Integer xp;

    @Column(name = "acessibilidade")
    private boolean acessibilidade;

    @Column(name = "estado")
    private String estado;

    @Column(name = "cor")
    private String cor;

    @Column(name = "comida")
    private String comida;

    @Column(name = "genero")
    private String genero;

    @Column(name = "pronome")
    private String pronome;

    @Column(name="senhaadm")
    private String senhaADM;

    @Column(name="foto_crianca")
    private String fotoCrianca;

    public Usuario() {
    }

    public Usuario(Integer id, String nomeResponsavel, String email, String cpf, String senha, String nomeCrianca,
            Integer idadeCrianca, Integer xp, boolean acessibilidade, String estado, String cor, String comida,
            String genero, String pronome, String senhaADM, String fotoCrianca) {
        this.id = id;
        this.nomeResponsavel = nomeResponsavel;
        this.email = email;
        this.cpf = cpf;
        this.senha = senha;
        this.nomeCrianca = nomeCrianca;
        this.idadeCrianca = idadeCrianca;
        this.xp = xp;
        this.acessibilidade = acessibilidade;
        this.estado = estado;
        this.cor = cor;
        this.comida = comida;
        this.genero = genero;
        this.pronome = pronome;
        this.senhaADM = senhaADM;
        this.fotoCrianca = fotoCrianca;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeResponsavel() {
        return nomeResponsavel;
    }

    public void setNomeResponsavel(String nomeResponsavel) {
        this.nomeResponsavel = nomeResponsavel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNomeCrianca() {
        return nomeCrianca;
    }

    public void setNomeCrianca(String nomeCrianca) {
        this.nomeCrianca = nomeCrianca;
    }

    public Integer getIdadeCrianca() {
        return idadeCrianca;
    }

    public void setIdadeCrianca(Integer idadeCrianca) {
        this.idadeCrianca = idadeCrianca;
    }

    public Integer getXp() {
        return xp;
    }

    public void setXp(Integer xp) {
        this.xp = xp;
    }

    public boolean isAcessibilidade() {
        return acessibilidade;
    }

    public void setAcessibilidade(boolean acessibilidade) {
        this.acessibilidade = acessibilidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getComida() {
        return comida;
    }

    public void setComida(String comida) {
        this.comida = comida;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getPronome() {
        return pronome;
    }

    public void setPronome(String pronome) {
        this.pronome = pronome;
    }

    public String getSenhaADM() {
        return senhaADM;
    }

    public void setSenhaADM(String senhaADM) {
        this.senhaADM = senhaADM;
    }

      public String getFotoCrianca() {
        return fotoCrianca;
    }

    public void setFotoCrianca(String fotoCrianca) {
        this.fotoCrianca = fotoCrianca;
    }



    
}