package com.senai.infoa.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.infoa.projetointegrador.models.Usuario;
import com.senai.infoa.projetointegrador.repositories.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Long contarUsuarios() {
        return usuarioRepository.count();
    }

    public Usuario buscarUsuario(Integer id){
        return usuarioRepository.findById(id).get();
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Boolean deletarUsuario(Integer id){
        if (usuarioRepository.existsById(id)) {
           usuarioRepository.deleteById(id);
           return true; 
        }
        return true;
    }

    public Usuario cadastrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizarUsuario(Integer id, Usuario usuario){
        Usuario usuarioRecuperado = buscarUsuario(id);
        if (usuarioRecuperado != null) {
            usuarioRecuperado.setId(id);
            if (usuario.getEmail() != null) {
                usuarioRecuperado.setCpf(usuario.getCpf());
            }
            return usuarioRepository.save(usuarioRecuperado);
        }
        return null;
    }
}