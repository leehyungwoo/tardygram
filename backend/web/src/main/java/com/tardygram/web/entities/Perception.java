package com.tardygram.web.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;




@Entity
@Getter
@Setter
@Table(name = "tbl_perception")
@NoArgsConstructor
public class Perception {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long perceptionno; 
	private String memberid;
    private String roomno;
    @ColumnDefault("0")
	private int perception;



}