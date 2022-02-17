package com.DeepFriedUnicorns.Teaching_Resource_Website;

import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("https://teaching-resource-client.herokuapp.com")
public class HelloWorldController {

    /**
     *  A simple REST API with the GET rout of /HelloWorld that will return a string
     *  to test if the client using Angular framework is able to make a request to it
     *
     * @return returns a string to test if the client is able to use the API
     */

     
    @RequestMapping(method = RequestMethod.GET, path = "/HelloWorld")
    public String GetHelloWorld(){
        System.out.print("call made from client");

        return "Hello World";
    }
}
