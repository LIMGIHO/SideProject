package com.myResume.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.myResume.service.CustomHeaderInterceptor;

import java.util.concurrent.TimeUnit;
import org.springframework.http.CacheControl;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private CustomHeaderInterceptor customHeaderInterceptor;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 정적 리소스 핸들러 추가
        registry.addResourceHandler("/**") // 모든 경로
                .addResourceLocations("classpath:/static/") // 정적 리소스 경로
                .setCacheControl(CacheControl
                        .maxAge(365, TimeUnit.DAYS) // 최대 1년 동안 캐시
                        .cachePublic()); // 공용 캐시 허용
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(customHeaderInterceptor)
                .addPathPatterns("/**"); // 모든 경로에 대해 적용
    }
}
