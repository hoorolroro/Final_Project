package com.spring.masinsa.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Message {

    private Status status;
    private String message;
    private Object data;

}	

