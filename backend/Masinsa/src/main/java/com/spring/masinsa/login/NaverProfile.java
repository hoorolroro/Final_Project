package com.spring.masinsa.login;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaverProfile {
    private String nickname;
    private String age;
    private String gender;
    private String birthyear;
}
