const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Digite seu nome completo",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Digite seu e-mail",
        },
        {
            id: 3,
            label: "Crie uma senha",
            placeholder: "Insira sua senha",
          },
          {
            id: 4,
            label: "Confirme sua senha",
            placeholder: "Insira sua senha",
          },
      ],
      checkbox: [],
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Digite seu CEP",
        },
      ],
      checkbox: [],
    },
    {
      id: 3,
      titulo: "Para finalizar, quais são os seus planos?",
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: "sulamerica",
        },
        {
          id: 2,
          value: "Unimed",
        },
      ],
    },
  ];

  export {secoes}