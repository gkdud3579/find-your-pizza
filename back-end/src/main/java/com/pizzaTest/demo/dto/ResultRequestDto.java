package com.pizzaTest.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResultRequestDto {

//    private List<Integer> selectQuestion;
    private int[] selectQuestion;
}
