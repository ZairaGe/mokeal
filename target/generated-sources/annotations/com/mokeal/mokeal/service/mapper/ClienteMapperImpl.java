package com.mokeal.mokeal.service.mapper;

import com.mokeal.mokeal.domain.Cliente;
import com.mokeal.mokeal.service.dto.ClienteDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-05-19T14:40:53+0200",
    comments = "version: 1.6.3, compiler: javac, environment: Java 21.0.10 (Eclipse Adoptium)"
)
@Component
public class ClienteMapperImpl implements ClienteMapper {

    @Override
    public Cliente toEntity(ClienteDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Cliente cliente = new Cliente();

        cliente.setId( dto.getId() );
        cliente.setNombre( dto.getNombre() );
        cliente.setTelefono( dto.getTelefono() );
        cliente.setEmail( dto.getEmail() );
        cliente.setNifCif( dto.getNifCif() );
        cliente.setDireccion( dto.getDireccion() );
        cliente.setMunicipio( dto.getMunicipio() );
        cliente.setCodigoPostal( dto.getCodigoPostal() );
        cliente.setNotas( dto.getNotas() );
        cliente.setActivo( dto.getActivo() );

        return cliente;
    }

    @Override
    public ClienteDTO toDto(Cliente entity) {
        if ( entity == null ) {
            return null;
        }

        ClienteDTO clienteDTO = new ClienteDTO();

        clienteDTO.setId( entity.getId() );
        clienteDTO.setNombre( entity.getNombre() );
        clienteDTO.setTelefono( entity.getTelefono() );
        clienteDTO.setEmail( entity.getEmail() );
        clienteDTO.setNifCif( entity.getNifCif() );
        clienteDTO.setDireccion( entity.getDireccion() );
        clienteDTO.setMunicipio( entity.getMunicipio() );
        clienteDTO.setCodigoPostal( entity.getCodigoPostal() );
        clienteDTO.setNotas( entity.getNotas() );
        clienteDTO.setActivo( entity.getActivo() );

        return clienteDTO;
    }

    @Override
    public List<Cliente> toEntity(List<ClienteDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Cliente> list = new ArrayList<Cliente>( dtoList.size() );
        for ( ClienteDTO clienteDTO : dtoList ) {
            list.add( toEntity( clienteDTO ) );
        }

        return list;
    }

    @Override
    public List<ClienteDTO> toDto(List<Cliente> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ClienteDTO> list = new ArrayList<ClienteDTO>( entityList.size() );
        for ( Cliente cliente : entityList ) {
            list.add( toDto( cliente ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Cliente entity, ClienteDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getNombre() != null ) {
            entity.setNombre( dto.getNombre() );
        }
        if ( dto.getTelefono() != null ) {
            entity.setTelefono( dto.getTelefono() );
        }
        if ( dto.getEmail() != null ) {
            entity.setEmail( dto.getEmail() );
        }
        if ( dto.getNifCif() != null ) {
            entity.setNifCif( dto.getNifCif() );
        }
        if ( dto.getDireccion() != null ) {
            entity.setDireccion( dto.getDireccion() );
        }
        if ( dto.getMunicipio() != null ) {
            entity.setMunicipio( dto.getMunicipio() );
        }
        if ( dto.getCodigoPostal() != null ) {
            entity.setCodigoPostal( dto.getCodigoPostal() );
        }
        if ( dto.getNotas() != null ) {
            entity.setNotas( dto.getNotas() );
        }
        if ( dto.getActivo() != null ) {
            entity.setActivo( dto.getActivo() );
        }
    }
}
