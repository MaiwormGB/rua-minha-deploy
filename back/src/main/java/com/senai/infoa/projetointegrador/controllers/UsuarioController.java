package com.senai.infoa.projetointegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.infoa.projetointegrador.models.Usuario;
import com.senai.infoa.projetointegrador.services.UsuarioService;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/contar-usuarios")
    public Long contarUsuarios() {
        return usuarioService.contarUsuarios();
    }

    @GetMapping("/buscar-usuarios/{id}")
    public Usuario buscarUsuario(@PathVariable Integer id) {
        return usuarioService.buscarUsuario(id);
    }

    @GetMapping("/listar-usuario")
    public List<Usuario> listarUsuarios() {
        return usuarioService.listarUsuarios();
    }
    
    @DeleteMapping("/deletar-usuario/{id}")
    public String deletarUsuario(@PathVariable Integer id) {
        if (usuarioService.deletarUsuario(id)) {
            return "Usuário removido com sucesso.";
        }
        return "Falha ao remover usuário.";
    }

    // @PostMapping("/salvar-usuario")
    // public Usuario cadastrarUsuario(@RequestBody Usuario usuario) {
    //     return usuarioService.cadastrarUsuario(usuario);
    // } 

    @PostMapping("/salvar-usuario")
public Usuario cadastrarUsuario(@RequestBody Usuario usuario) {

    System.out.println(usuario.getNomeResponsavel());
    System.out.println(usuario.getEmail());

    return usuarioService.cadastrarUsuario(usuario);
}

    @PutMapping("/atualizar-usuario/{id}")
    public String atualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuario) {
       if (usuarioService.atualizarUsuario(id, usuario) != null) {
          return "Usuário atualizado com sucesso.";
       }
        
        return "Falha ao atualizar usuário.";
    }
    
}