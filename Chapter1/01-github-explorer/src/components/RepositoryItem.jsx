export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'default'}</strong>
      <p>{repository.description}</p>

      <a href={repository.link}>
        Acessar repositório
      </a>
    </li>
  )
}