function microondas(prato, tempo) {
    let mensagem;
    switch (prato) {
        case 'Pipoca':
            mensagem = `Prato escolhido: Pipoca\nTempo de preparo escolhido: ${tempo}\n`
            if (tempo < 10) mensagem += 'Tempo insulficiente\n'
            if (tempo >= 10 && tempo < 20) mensagem += 'Prato pronto, bom apetite!\n'
            if (tempo >= 30) {
                mensagem += 'Kabumm\n'
                break
            }
            if (tempo >= 20) {
                mensagem += 'Prato queimou\n'
                break
            }
            break
        case 'Macarrão':
            mensagem = `Prato escolhido: Macarrão\nTempo de preparo escolhido: ${tempo}s\n`
            if (tempo < 8) mensagem += 'Tempo insulficiente\n'
            if (tempo > 8 && tempo < 16) mensagem += 'Prato pronto, bom apetite!\n'
            if (tempo >= 24) {
                mensagem += 'Kabumm\n'
                break
            }
            if (tempo >= 16) {
                mensagem += 'Prato queimou\n'
                break
            }
            break
        case 'Carne':
            mensagem = `Prato escolhido: Carne\nTempo de preparo escolhido: ${tempo}s\n`
            if (tempo < 15) mensagem += 'Tempo insulficiente\n'
            if (tempo >= 15 && tempo < 30) mensagem += 'Prato pronto, bom apetite!\n'
            if (tempo >= 45) {
                mensagem += 'Kabumm\n'
                break
            }
            if (tempo >= 30) {
                mensagem += 'Prato queimou\n'
                break
            }
            break
        case 'Feijão':
            mensagem = `Prato escolhido: Feijão\nTempo de preparo escolhido: ${tempo}s\n`
            if (tempo < 12) mensagem += 'Tempo insulficiente\n'
            if (tempo >= 12 && tempo < 24) mensagem += 'Prato pronto, bom apetite!\n'
            if (tempo >= 36) {
                mensagem += 'Kabumm\n'
                break
            }
            if (tempo >= 24) {
                mensagem += 'Prato queimou\n'
                break
            }
            break
        case 'Brigadeiro':
            mensagem = `Prato escolhido: Brigadeiro\nTempo de preparo escolhido: ${tempo}s\n`
            if (tempo < 8) mensagem += 'Tempo insulficiente\n'
            if (tempo >= 8 && tempo < 16) mensagem += 'Prato pronto, bom apetite!\n'
            if (tempo >= 24) {
                mensagem += 'Kabumm\n'
                break
            }
            if (tempo >= 16) {
                mensagem += 'Prato queimou\n'
                break
            }
            break
        default:
            mensagem = 'Prato inexistente!\n'
    }
    console.log(mensagem)
}
microondas('Carne', 15);
microondas('Pipoca', 20);
microondas('Macarrão', 7);
microondas('Feijão', 36);
microondas('Brigadeiro', 12);
microondas('Arroz', 12);
