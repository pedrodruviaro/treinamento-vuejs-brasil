- Códigos de login e create account na home ao invés de dentro do custom header => facilita manutenção
- axios interceptor de response => serve para filtrar quais error serão disparadados. Sem o interceptor, todos os erros estavam caindo. Queremos apenas que os errors com status 0 ou 500 sejam tratados no bloco catch, os outros vamos tratar no front
  - erros inesperados
  - erros para exibir mensagens
