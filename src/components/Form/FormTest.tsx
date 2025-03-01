
const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (fileRef.current?.files) {
        console.log(
            `Selected file - ${fileRef.current.files[0].name}`
        );
    }
}
return (
    <form onSubmit={handleSubmite}>
        <Input name='email' type='email' value={email} handleChange={(e) => handleEmail(e)}/>
        <Input name='password' type='password' value={password} handleChange={(e) => handlePassword(e)}/>
        <input type='file' ref={fileRef} onChange={(e) => handleFiles(e)}/>
        <button type="submit">Submit</button>
        <input name="name"
            value={nameState.value}
            style={nameState.value ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}
            onChange={(e) => {
                const valid = validate(e.target.value);
                setNameState({value: e.target.value, valid})
            }}
            />
        
      </form>
)
}