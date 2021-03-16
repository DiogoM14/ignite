import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { api } from '../../services/api'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title, value, type, category
    }

    api.post('transactions', data)
  }

  return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >

    <button type="button" onClick={onRequestClose} className="react-modal-close">
      <img src={closeImg} alt="Fechar modal"/>
    </button>

    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Registar transação</h2>

      <input 
        placeholder="Título"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input 
        type="number"
        placeholder="Valor"
        value={value}
        onChange={event => setValue(Number(event.target.value))}
      />

      <TransactionTypeContainer>
        <RadioBox 
          type="button"
          onClick={() => { setType('deposit') }}
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImage} alt="Entrada"/>
          <span>Entrada</span>
        </RadioBox>

        <RadioBox 
          type="button"
          onClick={() => { setType('withdraw') }}
          isActive={type === 'withdraw'}
          activeColor="red"
        >
          <img src={outcomeImage} alt="Saída"/>
          <span>Entrada</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input 
        placeholder="Categoria"
        value={category}
        onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">Registar</button>
    </Container>
</Modal>
  )
}