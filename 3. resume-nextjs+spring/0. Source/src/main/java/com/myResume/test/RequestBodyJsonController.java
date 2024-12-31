// package com.PERFormance_Tracker.test;

// import org.springframework.http.HttpEntity;
// import org.springframework.stereotype.Controller;
// import org.springframework.util.StreamUtils;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.ResponseBody;

// import com.fasterxml.jackson.databind.ObjectMapper;

// import jakarta.servlet.ServletInputStream;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import lombok.extern.slf4j.Slf4j;

// import java.io.IOException;
// import java.nio.charset.StandardCharsets;

// @Slf4j
// @Controller
// public class RequestBodyJsonController {
// private ObjectMapper objectMapper = new ObjectMapper();

// @PostMapping("/request-body-json-v1")
// public void requestBodyJsonV1(HttpServletRequest request, HttpServletResponse
// response) throws IOException {
// ServletInputStream inputStream = request.getInputStream();
// String messageBody = StreamUtils.copyToString(inputStream,
// StandardCharsets.UTF_8);

// log.info("messageBody={}", messageBody);
// HelloData helloData = objectMapper.readValue(messageBody, HelloData.class);
// log.info("username={}, age={}", helloData.getUsername(), helloData.getAge());

// response.getWriter().write("ok-v1");
// }

// @ResponseBody
// @PostMapping("/request-body-json-v2")
// public String requestBodyJsonV2(@RequestBody String messageBody) throws
// IOException {

// log.info("messageBody={}", messageBody);
// HelloData helloData = objectMapper.readValue(messageBody, HelloData.class);
// log.info("username={}, age={}", helloData.getUsername(), helloData.getAge());

// return "ok-v2";
// }

// @ResponseBody
// @PostMapping("/request-body-json-v3")
// public String requestBodyJsonV3(@RequestBody HelloData helloData) {

// log.info("username={}, age={}", helloData.getUsername(), helloData.getAge());

// return "ok-v3";
// }

// @SuppressWarnings("null")
// @ResponseBody
// @PostMapping("/request-body-json-v4")
// public String requestBodyJsonV4(HttpEntity<HelloData> httpEntity) {
// HelloData helloData = httpEntity.getBody();
// log.info("username={}, age={}", helloData.getUsername(), helloData.getAge());

// return "ok-v3";
// }

// @ResponseBody
// @PostMapping("/request-body-json-v5")
// public HelloData requestBodyJsonV5(@RequestBody HelloData helloData) {
// log.info("username={}, age={}", helloData.getUsername(), helloData.getAge());

// return helloData;
// }
// }
