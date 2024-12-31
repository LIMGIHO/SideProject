package com.myResume.service;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class CustomHeaderInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) {
        // 정적 리소스 요청에 헤더 추가
        response.addHeader("Connection", "keep-alive");
        response.addHeader("Keep-Alive", "timeout=0");
    }
}
