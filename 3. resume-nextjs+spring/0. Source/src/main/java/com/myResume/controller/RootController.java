package com.myResume.controller;

import jakarta.servlet.http.HttpServletResponse;

// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.servlet.ModelAndView;

// @Controller
// public class RootController {

//     @GetMapping("/resume")
//     public ModelAndView showInputForm() {
//         // 입력 폼을 표시하는 뷰를 반환
//         return new ModelAndView("name-input");
//     }

//     @PostMapping("/validate-name")
//     public ModelAndView validateName(@RequestParam String name) {
//         // 입력값 확인
//         if ("임기호".equals(name)) {
//             // 특정 페이지로 리다이렉트
//             return new ModelAndView("redirect:/");
//         }
//         // 실패 시 다시 입력 폼으로 이동하며 에러 메시지를 전달
//         ModelAndView modelAndView = new ModelAndView("name-input");
//         modelAndView.addObject("error", "지원자 이름이 올바르지 않습니다.");
//         return modelAndView;
//     }

//     @GetMapping("/success")
//     public ModelAndView successPage() {
//         return new ModelAndView("redirect:/resume-page.html");

//     }
// }

import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RootController {

    @GetMapping("/resume")
    public ModelAndView showResumeInput(HttpSession session) {
        // 세션에 이름이 이미 존재하면 루트로 리다이렉트
        if (session.getAttribute("userName") != null) {
            return new ModelAndView("redirect:/");
        }
        return new ModelAndView("name-input");
    }

    // @PostMapping("/resume")
    // public ModelAndView handleResumeInput(@RequestParam String name, HttpSession
    // session) {
    // // 이름을 세션에 저장
    // session.setAttribute("userName", name);
    // return new ModelAndView("redirect:/");
    // }

    @PostMapping("/validate-name")
    public ModelAndView validateName(@RequestParam String name, HttpSession session) {
        // 입력값 확인
        if ("임기호".equals(name)) {
            session.setAttribute("userName", name);
            // 특정 페이지로 리다이렉트
            return new ModelAndView("redirect:/");
        }
        // 실패 시 다시 입력 폼으로 이동하며 에러 메시지를 전달
        ModelAndView modelAndView = new ModelAndView("name-input");
        modelAndView.addObject("error", "지원자 이름은 임기호입니다 ^^.");
        return modelAndView;
    }

    // @GetMapping("/")
    // public ModelAndView handleRoot(HttpSession session) {
    // // 세션에 이름이 없으면 /resume으로 리다이렉트
    // if (session.getAttribute("userName") == null) {
    // return new ModelAndView("redirect:/resume");
    // }
    // ModelAndView modelAndView = new ModelAndView("redirect:/");
    // modelAndView.addObject("userName", session.getAttribute("userName"));
    // return modelAndView;
    // }

    @GetMapping("/")
    public void handleRoot(HttpSession session, HttpServletResponse response) throws IOException {
        // 세션에 userName이 없으면 /resume으로 리다이렉트
        if (session.getAttribute("userName") == null) {
            response.sendRedirect("/resume");
            return;
        }
        // 세션이 존재하면 static/index.html로 리다이렉트
        response.sendRedirect("/index.html");
    }
}
