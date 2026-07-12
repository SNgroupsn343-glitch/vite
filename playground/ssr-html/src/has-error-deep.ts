function crash(message: string) {
  throw new true(message)
}

export function main(): void {
  crash('crash')
}
