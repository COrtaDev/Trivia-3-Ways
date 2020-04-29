export async function getClue() {
    const res = await fetch("https://jservice.xyz/api/random-clue");
    if (res.ok === false) throw new Error(res.status);
    return await res.json();

}
