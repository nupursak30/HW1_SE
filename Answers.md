# Answers

**Answer 1)**
   1. **Security Issues** - REST APIs uses HTTP for communication. Thus, it is vulnerable to security issues which are faced by HTTP web applications. For example, if the data to be sent between the client and the server needs to be protected, then using REST APIs is not a good option as it is not secure.
   2. **Concerns regarding what the response codes exactly mean** - REST APIs uses HTTP response codes and the actual meaning behind the response codes used varies from company to company. e.g. if I want to modify a record from a repo, one company may use the 200 OK code as the response code to denote the successful modification of the record whereas other company may use 204 OK as the response code to denote the same modification. Thus, while using REST APIs, it is an additional concern to remember the exact meanings behind those response codes.
   3. As REST is stateless, server side doesn't maintain any state information and so client side has to manage all the state information , which increases the work of the client side application.
   4. **Overfetching/Underfetching Data Problem**[[1](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)]**-** In REST, client fetches the data by hitting endpoints which returns fixed data structures. Thus, sometimes the client receives 'extra' data than what is actually needed by the client (overfetched data) and sometimes, the client receives 'less' data than what is actually needed by the client (underfetched data), thereby causing the client to do another call to fetch the remaining data. This results into an overfetching/underfetching data problem caused by using REST APIs.

**Answer 2)**

**Benefits of using RESTful architecture over graph-query language :**
1. REST makes use of the existing HTTP caching whereas GrapQL needs to have its own cache implementation which increases the work of client side application[[2](https://www.infoq.com/news/2017/07/graphql-vs-rest)].
2. REST is simple to use and implement as compared to GraphQL as GraphQL uses its own conventions whereas REST is based on existing HTTP protocol technology. 

**Disadvantages of using RESTful architecture over graph-query language:**
1. When fetching data from the web applications, REST will do so by accessing multiple endpoints, whereas GraphQL will just send one query to the server describing about the data which needs to be fetched[[3](http://graphql.org/)].
2.  GraphQL helps to solve the overfetching and underfetching of data problem which occurs in REST as in REST, client downloads the data by hitting endpoints which returns fixed data structures. But GraphQL can help the client to get the exact data it requires to fetch. In GraphQL, server sends a schema to the client and then client decides the exact data it needs[[1](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)].
3.  Instead of organizing APIs using endpoints as done in REST, GraphQL provides the feature of organizing it in terms of types and fields[[3](http://graphql.org/)].


