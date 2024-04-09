function matrixMult(A, B) {
  let [Ar1, Ar2, Ar3] = A
  let [Br1, Br2, Br3] = B
  
  let [A11, A12, A13] = Ar1
  let [A21, A22, A23] = Ar2
  let [A31, A32, A33] = Ar3

  let [B11, B12, B13] = Br1
  let [B21, B22, B23] = Br2
  let [B31, B32, B33] = Br3
  
  let C11 = A11 * B11 + A12 * B21 + A13 * B31
  let C12 = A11 * B12 + A12 * B22 + A13 * B32
  let C13 = A11 * B13 + A12 * B23 + A13 * B33

  let C21 = A21 * B11 + A22 * B21 + A23 * B31
  let C22 = A21 * B12 + A22 * B22 + A23 * B32
  let C23 = A21 * B13 + A22 * B23 + A23 * B33

  let C31 = A31 * B11 + A32 * B21 + A33 * B31
  let C32 = A31 * B12 + A32 * B22 + A33 * B32
  let C33 = A31 * B13 + A32 * B23 + A33 * B33
  
  return [
    [C11, C12, C13],
    [C21, C22, C23],
    [C31, C32, C33]
  ]
}

function matrixTimesVector(M, V) {
  let [Ar1, Ar2, Ar3] = M
  
  let [V1, V2, V3] = V
  
  let [A11, A12, A13] = Ar1
  let [A21, A22, A23] = Ar2
  let [A31, A32, A33] = Ar3
  
  let R1 = A11 * V1 + A12 * V2 + A13 * V3
  let R2 = A21 * V1 + A22 * V2 + A23 * V3
  let R3 = A31 * V1 + A32 * V2 + A33 * V3
  
  return [R1, R2, R3]
}
