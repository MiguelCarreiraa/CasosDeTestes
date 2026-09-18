import { test, expect } from '@playwright/test';

function gerarSenha(tamanho: number) {
  return `A${'a'.repeat(tamanho - 2)}1`;
}

const casos = [
  { senha: gerarSenha(7), classe: 'comprimento abaixo do mínimo (7)', mensagem: 'Senha fora do padrão' },
  { senha: gerarSenha(8), classe: 'comprimento no limite mínimo (8)', mensagem: 'Senha cadastrada' },
  { senha: gerarSenha(9), classe: 'comprimento acima do mínimo (9)', mensagem: 'Senha cadastrada' },
  { senha: gerarSenha(19), classe: 'comprimento abaixo do máximo (19)', mensagem: 'Senha cadastrada' },
  { senha: gerarSenha(20), classe: 'comprimento no limite máximo (20)', mensagem: 'Senha cadastrada' },
  { senha: gerarSenha(21), classe: 'comprimento acima do máximo (21)', mensagem: 'Senha fora do padrão' },
  { senha: 'abcdefg1', classe: 'sem letra maiúscula', mensagem: 'Senha fora do padrão' },
  { senha: 'ABCDEFG1', classe: 'sem letra minúscula', mensagem: 'Senha fora do padrão' },
  { senha: 'Abcdefgh', classe: 'sem número', mensagem: 'Senha fora do padrão' },
  { senha: 'Abc defg1', classe: 'contém espaço', mensagem: 'Senha fora do padrão' },
  { senha: '', classe: 'vazia', mensagem: 'Senha fora do padrão' },
];

for (const caso of casos) {
  test(`senha "${caso.senha}" — ${caso.classe}`, async ({ page }) => {
    await page.goto('/senha');
    await page.getByLabel('Nova senha').fill(caso.senha);
    await page.getByLabel('Confirmar senha').fill(caso.senha);
    await page.getByRole('button', { name: 'Cadastrar senha' }).click();

    const resultado = page.locator('#resultado');
    await expect(resultado).toBeVisible();
    await expect(resultado).toHaveText(caso.mensagem);
    await expect(resultado).toHaveAttribute('role', caso.mensagem === 'Senha cadastrada' ? 'status' : 'alert');
  });
}

test.describe('confirmação de senha', () => {
  test('recusa quando a confirmação não coincide com a senha', async ({ page }) => {
    await page.goto('/senha');
    await page.getByLabel('Nova senha').fill('Abcdefg1');
    await page.getByLabel('Confirmar senha').fill('Abcdefg2');
    await page.getByRole('button', { name: 'Cadastrar senha' }).click();

    const resultado = page.locator('#resultado');
    await expect(resultado).toHaveText('As senhas não coincidem');
    await expect(resultado).toHaveAttribute('role', 'alert');
  });

  test('limpa o formulário após cadastrar a senha com sucesso', async ({ page }) => {
    await page.goto('/senha');
    await page.getByLabel('Nova senha').fill('Abcdefg1');
    await page.getByLabel('Confirmar senha').fill('Abcdefg1');
    await page.getByRole('button', { name: 'Cadastrar senha' }).click();

    await expect(page.locator('#resultado')).toHaveText('Senha cadastrada');
    await expect(page.getByLabel('Nova senha')).toHaveValue('');
    await expect(page.getByLabel('Confirmar senha')).toHaveValue('');
  });
});
