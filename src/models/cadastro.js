function validarCPF(cpf) {
  return cpf.length !== 11
    ? { valido: false, texto: "CPF deve ter 11 dígitos" }
    : { valido: true, texto: "" };
}

function validarSenha(senha) {
  return senha.length < 4 || senha.length > 72
    ? { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos" }
    : { valido: true, texto: "" };
}

export { validarCPF, validarSenha };
