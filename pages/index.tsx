import Button from '@/components/Button/Button'

const HomePage = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="mt-12 container mx-auto max-w-2xl p-12 space-y-5 bg-white shadow-md">
      <p className="mb-12 text-red-800 text-4xl font-semibold">
        Button Components Example Using Typescript
      </p>
      <Button size="sm" onClick={handleClick}>
        smoll
      </Button>
      <Button width="full" radius="lg">
        henlo
      </Button>
      <Button variant="outline">henlo with a very long text</Button>
      <br />
      <Button size="large">large button</Button>
      <br />
      <Button
        type="submit"
        size="large"
        variant="outline"
        radius="full"
        width="full"
      >
        using combined variants
      </Button>
      <br />
      <Button
        className="bg-green-100 border border-green-800 text-green-800 hover:bg-green-200"
        variant="custom"
      >
        override styling
      </Button>
      <br />
      <Button disabled>disabled button</Button>
    </div>
  )
}

export default HomePage
