"""
TrendGear Dashboard - Generador de Dataset Sintético
=====================================================
Genera datos sintéticos de clientes de e-commerce para el taller
"TrendGear Dashboard: De la Data Sintética a la Web Funcional".

Sigue los 4 pasos de la metodología:
1. Crear muestra   -> listas base de valores realistas
2. Limpiar muestra  -> normalización de categorías y formatos
3. One-shot prompting -> este script actúa como el "prompt" reproducible
4. Revisión         -> función validate_dataset() aplica el checklist

Uso:
    python3 generate_dataset.py --n 25 --seed 42
"""

import argparse
import csv
import random
from datetime import date, timedelta

FIRST_NAMES = [
    "Sofia", "Mateo", "Valentina", "Santiago", "Isabella", "Sebastian",
    "Camila", "Nicolas", "Valeria", "Samuel", "Luciana", "Andres",
    "Mariana", "Diego", "Gabriela", "Julian", "Daniela", "Emilio",
    "Antonella", "Tomas", "Renata", "Felipe", "Paula", "Alejandro",
    "Victoria",
]

LAST_NAMES = [
    "Garcia", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
    "Perez", "Sanchez", "Ramirez", "Torres", "Flores", "Rivera",
    "Gomez", "Diaz", "Cruz", "Morales", "Ortiz", "Castro", "Vargas",
    "Romero",
]

PRODUCTS = [
    "Laptop UltraBook 14\"", "Smartphone Pixel X", "Auriculares NoiseCancel Pro",
    "Smartwatch FitTrack 3", "Tablet AirView 11\"", "Teclado Mecanico RGB",
    "Mouse Inalambrico ErgoPlus", "Monitor UltraWide 27\"", "Camara WebCam HD Pro",
    "Parlante Bluetooth BassBoom", "Cargador Rapido 65W", "SSD Externo 1TB",
    "Consola GameStation Mini", "Drone SkyView 4K", "Impresora InkJet Compact",
]

CITIES = [
    "Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena",
    "Cucuta", "Bucaramanga", "Pereira", "Manizales", "Santa Marta",
]

PAYMENT_METHODS = ["Credit Card", "Debit Card", "PayPal", "Bank Transfer"]
MEMBERSHIP_STATUSES = ["Bronze", "Silver", "Gold", "Platinum"]

EMAIL_DOMAIN = "mailinator.com" 

def slugify_email_local_part(name: str, last: str, idx: int) -> str:
    base = f"{name}.{last}".lower()
    base = (
        base.replace("á", "a").replace("é", "e").replace("í", "i")
        .replace("ó", "o").replace("ú", "u").replace("ñ", "n")
    )
    return f"{base}{idx}"


def random_date(start: date, end: date) -> date:
    delta_days = (end - start).days
    return start + timedelta(days=random.randint(0, max(delta_days, 0)))


def generate_record(idx: int, today: date) -> dict:
    first = random.choice(FIRST_NAMES)
    last = random.choice(LAST_NAMES)
    full_name = f"{first} {last}"

    age = random.randint(13, 78) 
    amount = round(random.uniform(15.99, 2499.99), 2)

    purchase_date = random_date(today - timedelta(days=365), today)
    last_login = random_date(purchase_date, today)

    return {
        "Customer ID": f"TG-{idx:04d}",
        "Name": full_name,
        "Email": f"{slugify_email_local_part(first, last, idx)}@{EMAIL_DOMAIN}",
        "Product Purchased": random.choice(PRODUCTS),
        "Purchase Date": purchase_date.isoformat(),  
        "Amount Spent ($)": f"{amount:.2f}",
        "Age": age,
        "City": random.choice(CITIES),
        "Payment Method": random.choice(PAYMENT_METHODS),
        "Last Login Date": last_login.isoformat(),
        "Membership Status": random.choice(MEMBERSHIP_STATUSES),
    }


def generate_dataset(n: int, seed: int = 42) -> list:
    random.seed(seed)
    today = date.today()
    return [generate_record(i + 1, today) for i in range(n)]

def validate_dataset(records: list) -> list:
    """Devuelve una lista de mensajes de error. Lista vacía = dataset válido."""
    errors = []
    seen_ids = set()
    seen_emails = set()

    for r in records:
        cid = r["Customer ID"]
        if cid in seen_ids:
            errors.append(f"ID duplicado: {cid}")
        seen_ids.add(cid)

        age = int(r["Age"])
        if not (13 <= age <= 100):
            errors.append(f"{cid}: edad fuera de rango ({age})")

        amount = float(r["Amount Spent ($)"])
        if amount < 0:
            errors.append(f"{cid}: monto negativo ({amount})")

        try:
            pdate = date.fromisoformat(r["Purchase Date"])
            ldate = date.fromisoformat(r["Last Login Date"])
        except ValueError:
            errors.append(f"{cid}: formato de fecha inválido (debe ser ISO YYYY-MM-DD)")
            continue

        if pdate > ldate:
            errors.append(f"{cid}: Purchase Date posterior a Last Login Date")
        if pdate > date.today() or ldate > date.today():
            errors.append(f"{cid}: fecha futura detectada")

        if r["Payment Method"] not in PAYMENT_METHODS:
            errors.append(f"{cid}: método de pago no normalizado ({r['Payment Method']})")
        if r["Membership Status"] not in MEMBERSHIP_STATUSES:
            errors.append(f"{cid}: membresía no normalizada ({r['Membership Status']})")

        email = r["Email"]
        if email in seen_emails:
            errors.append(f"{cid}: email duplicado ({email})")
        seen_emails.add(email)
        if "@" not in email or not email.endswith(EMAIL_DOMAIN):
            errors.append(f"{cid}: dominio de correo no seguro ({email})")

    return errors

FIELDNAMES = [
    "Customer ID", "Name", "Email", "Product Purchased", "Purchase Date",
    "Amount Spent ($)", "Age", "City", "Payment Method", "Last Login Date",
    "Membership Status",
]


def export_csv(records: list, path: str):
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(records)


def export_psv(records: list, path: str):
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES, delimiter="|")
        writer.writeheader()
        writer.writerows(records)


def export_json(records: list, path: str):
    import json
    with open(path, "w", encoding="utf-8") as f:
        json.dump({r["Customer ID"]: r for r in records}, f, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generador de dataset sintético TrendGear")
    parser.add_argument("--n", type=int, default=25, help="Número de registros a generar")
    parser.add_argument("--seed", type=int, default=42, help="Semilla aleatoria (reproducibilidad)")
    parser.add_argument("--out-prefix", type=str, default="trendgear_dataset", help="Prefijo de archivos de salida")
    args = parser.parse_args()

    data = generate_dataset(args.n, args.seed)
    errors = validate_dataset(data)

    export_csv(data, f"{args.out_prefix}.csv")
    export_psv(data, f"{args.out_prefix}.psv")
    export_json(data, f"{args.out_prefix}.json")

    print(f"✔ Generados {len(data)} registros -> {args.out_prefix}.csv / .psv / .json")
    if errors:
        print(f"\n⚠ Se encontraron {len(errors)} problemas de validación:")
        for e in errors:
            print(f"  - {e}")
    else:
        print("✔ Validación de integridad: SIN ERRORES (checklist completo)")
