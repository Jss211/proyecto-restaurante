// Convierte un número en formato de moneda peruana (ej:14 -> S/ 14.00)
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
    }).format(amount);
}