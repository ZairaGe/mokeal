package com.mokeal.mokeal.service.mapper;

import com.mokeal.mokeal.domain.Tarifa;
import com.mokeal.mokeal.service.dto.TarifaDTO;
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
public class TarifaMapperImpl implements TarifaMapper {

    @Override
    public Tarifa toEntity(TarifaDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Tarifa tarifa = new Tarifa();

        tarifa.setId( dto.getId() );
        tarifa.setZona( dto.getZona() );
        tarifa.setTipoServicio( dto.getTipoServicio() );
        tarifa.setPrecioFirstHora( dto.getPrecioFirstHora() );
        tarifa.setPrecioHoraAdicional( dto.getPrecioHoraAdicional() );
        tarifa.setMinimoHoras( dto.getMinimoHoras() );
        tarifa.setPrecioPorKm( dto.getPrecioPorKm() );
        tarifa.setActiva( dto.getActiva() );

        return tarifa;
    }

    @Override
    public TarifaDTO toDto(Tarifa entity) {
        if ( entity == null ) {
            return null;
        }

        TarifaDTO tarifaDTO = new TarifaDTO();

        tarifaDTO.setId( entity.getId() );
        tarifaDTO.setZona( entity.getZona() );
        tarifaDTO.setTipoServicio( entity.getTipoServicio() );
        tarifaDTO.setPrecioFirstHora( entity.getPrecioFirstHora() );
        tarifaDTO.setPrecioHoraAdicional( entity.getPrecioHoraAdicional() );
        tarifaDTO.setMinimoHoras( entity.getMinimoHoras() );
        tarifaDTO.setPrecioPorKm( entity.getPrecioPorKm() );
        tarifaDTO.setActiva( entity.getActiva() );

        return tarifaDTO;
    }

    @Override
    public List<Tarifa> toEntity(List<TarifaDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Tarifa> list = new ArrayList<Tarifa>( dtoList.size() );
        for ( TarifaDTO tarifaDTO : dtoList ) {
            list.add( toEntity( tarifaDTO ) );
        }

        return list;
    }

    @Override
    public List<TarifaDTO> toDto(List<Tarifa> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<TarifaDTO> list = new ArrayList<TarifaDTO>( entityList.size() );
        for ( Tarifa tarifa : entityList ) {
            list.add( toDto( tarifa ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Tarifa entity, TarifaDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getZona() != null ) {
            entity.setZona( dto.getZona() );
        }
        if ( dto.getTipoServicio() != null ) {
            entity.setTipoServicio( dto.getTipoServicio() );
        }
        if ( dto.getPrecioFirstHora() != null ) {
            entity.setPrecioFirstHora( dto.getPrecioFirstHora() );
        }
        if ( dto.getPrecioHoraAdicional() != null ) {
            entity.setPrecioHoraAdicional( dto.getPrecioHoraAdicional() );
        }
        if ( dto.getMinimoHoras() != null ) {
            entity.setMinimoHoras( dto.getMinimoHoras() );
        }
        if ( dto.getPrecioPorKm() != null ) {
            entity.setPrecioPorKm( dto.getPrecioPorKm() );
        }
        if ( dto.getActiva() != null ) {
            entity.setActiva( dto.getActiva() );
        }
    }
}
