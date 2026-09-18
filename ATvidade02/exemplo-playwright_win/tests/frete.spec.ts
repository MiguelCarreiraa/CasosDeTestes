import { test, expect } from '@playwright/test';

const casos = [
  { cep: '80000000', valor: '100', classe: 'CEP inicia com 8 e valor abaixo do frete grátis', mensagem: 'Frete: R$ 15,00' },
  { cep: '01000000', valor: '100', classe: 'CEP não inicia com 8 e valor abaixo do frete grátis', mensagem: 'Frete: R$ 25,00' },
  { cep: '01000000', valor: '199,99', classe: 'valor logo abaixo do limite de frete grátis', mensagem: 'Frete: R$ 25,00' },
  { cep: '01000000', valor: '200', classe: 'valor no limite do frete grátis', mensagem: 'Frete grátis' },
  { cep: '80000000', valor: '200,01', classe: 'valor logo acima do limite do frete grátis', mensagem: 'Frete grátis' },
  { cep: '8000000', valor: '100', classe: 'CEP com 7 dígitos (abaixo do exigido)', mensagem: 'Dados inválidos' },
  { cep: '800000000', valor: '100', classe: 'CEP com 9 dígitos (acima do exigido)', mensagem: 'Dados inválidos' },
  { cep: 'abcdefgh', valor: '100', classe: 'CEP não numérico', mensagem: 'Dados inválidos' },
  { cep: '', valor: '100', classe: 'CEP vazio', mensagem: 'Dados inválidos' },
  { cep: '01000000', valor: '0', classe: 'valor igual a zero', mensagem: 'Dados inválidos' },
  { cep: '01000000', valor: 'abc', classe: 'valor não numérico', mensagem: 'Dados inválidos' },
  { cep: '01000000', valor: '100,555', classe: 'valor com mais de duas casas decimais', mensagem: 'Dados inválidos' },
  { cep: '01000000', valor: '', classe: 'valor vazio', mensagem: 'Dados inválidos' },
];

for (const caso of casos) {
  test(`cep ${caso.cep || '(vazio)'} valor ${caso.valor || '(vazio)'} — ${caso.classe}`, async ({ page }) => {
    await page.goto('/frete');
    await page.getByLabel('CEP').fill(caso.cep);
    await page.getByLabel('Valor do pedido').fill(caso.valor);
    await page.getByRole('button', { name: 'Calcular frete' }).click();

    const resultado = page.locator('#resultado');
    await expect(resultado).toBeVisible();
    await expect(resultado).toHaveText(caso.mensagem);
    await expect(resultado).toHaveAttribute('role', caso.mensagem === 'Dados inválidos' ? 'alert' : 'status');
  });
}
