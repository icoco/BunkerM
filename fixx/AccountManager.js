import {
    C as Q,
    Z as Y,
    N as c,
    Q as Z,
    O as j,
    c as G,
    o as h,
    w as s,
    ap as J,
    a as e,
    b as S,
    a6 as k,
    a7 as P,
    f as n,
    aa as A,
    e as p,
    s as E,
    av as H,
    a8 as I,
    ad as K,
    d,
    t as m,
    aw as W,
    u as O,
    x as X,
    v as ee,
    V as T,
    a9 as q,
    ab as F,
    ax as ae,
    ay as le,
    af as se,
    ag as U,
    az as re,
    aA as te,
    ac as oe
} from "./index-B1El5jaV.js";
const ue = d("strong", null, "Note:", -1),
    ne = d("thead", null, [d("tr", null, [d("th", null, "Name"), d("th", null, "Email"), d("th", null, "Created"), d("th", null, "Actions")])], -1),
    me = Q({
        __name: "AccountManager",
        setup(ie) {
           

function *guidGenerator() {
    while (true) {
        const uuidv4 = () => {
            // Generate a random number from 0 to 15
            function randomDigit () {
              return Math.floor (Math.random () * 16);
            }
            // Generate a random hex digit
            function randomHex () {
              return randomDigit ().toString (16);
            }
            // Generate a random segment of 4 hex digits
            function randomSegment () {
              return randomHex () + randomHex () + randomHex () + randomHex ();
            }
          // Generate a UUID following the 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' pattern
            return randomSegment () + '-' + randomSegment () + '-4' 
+ randomSegment ().substring (1, 3) + '-' + randomHex () 
+ randomSegment ().substring (1, 3) + '-' + randomSegment () 
+ randomSegment ();
        }
        yield uuidv4();
    }
}

const getGuid = guidGenerator();

            
            const $ = Y(),
                _ = c([]),
                g = c(!1),
                f = c(null),
                v = c(!1),
                N = c(""),
                V = c("success"),
                b = c(!1),
                r = c({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }),
                u = c({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
            Z(() => {
                z()
            });

            function z() {
                const t = localStorage.getItem("users") || "[]";
                try {
                    _.value = JSON.parse(t)
                } catch (l) {
                    console.error("Error parsing users from localStorage", l), _.value = []
                }
            }
            const y = j(() => $.user);

            function B(t) {
                f.value = t, g.value = !0
            }

            function L() {
                var w, C;
                if (!f.value) return;
                if (((w = y.value) == null ? void 0 : w.id) === f.value.id) {
                    N.value = "Cannot delete the currently logged in user", V.value = "error", v.value = !0, g.value = !1;
                    return
                }
                const t = localStorage.getItem("users") || "[]";
                let l = [];
                try {
                    l = JSON.parse(t), l = l.filter(i => {
                        var x;
                        return i.id !== ((x = f.value) == null ? void 0 : x.id)
                    }), localStorage.setItem("users", JSON.stringify(l));
                    const a = localStorage.getItem("passwords") || "{}",
                        o = JSON.parse(a);
                    (C = f.value) != null && C.id && o[f.value.id] && (delete o[f.value.id], localStorage.setItem("passwords", JSON.stringify(o))), _.value = l, N.value = "User deleted successfully", V.value = "success", v.value = !0
                } catch (a) {
                    console.error("Error deleting user", a), N.value = "Error deleting user", V.value = "error", v.value = !0
                }
                g.value = !1
            }

            function M() {
                confirm("Are you sure you want to reset all authentication data? This will log you out.") && (re(), window.location.href = "/auth/login")
            }

            function R() {
                let t = !0;
                return u.value = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }, r.value.firstName.trim() || (u.value.firstName = "First name is required", t = !1), r.value.lastName.trim() || (u.value.lastName = "Last name is required", t = !1), r.value.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value.email) || (u.value.email = "Invalid email format", t = !1) : (u.value.email = "Email is required", t = !1), r.value.password ? r.value.password.length < 8 && (u.value.password = "Password must be at least 8 characters", t = !1) : (u.value.password = "Password is required", t = !1), r.value.password !== r.value.confirmPassword && (u.value.confirmPassword = "Passwords do not match", t = !1), t
            }
            async function D() {
                if (R()) try {
                    const t = localStorage.getItem("users") || "[]",
                        l = JSON.parse(t);
                    if (l.some(i => i.email === r.value.email)) {
                        u.value.email = "Email already exists";
                        return
                    }
                    const w = {
                            id: getGuid.next(),//crypto.randomUUID(),
                            firstName: r.value.firstName.trim(),
                            lastName: r.value.lastName.trim(),
                            email: r.value.email.trim(),
                            createdAt: new Date().toISOString()
                        },
                        C = await te(r.value.password);
                    l.push(w), localStorage.setItem("users", JSON.stringify(l));
                    const a = localStorage.getItem("passwords") || "{}",
                        o = JSON.parse(a);
                    o[w.id] = C, localStorage.setItem("passwords", JSON.stringify(o)), _.value = l, r.value = {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }, b.value = !1, N.value = "User created successfully", V.value = "success", v.value = !0
                } catch (t) {
                    console.error("Error creating user", t), N.value = "Error creating user", V.value = "error", v.value = !0
                }
            }
            return (t, l) => {
                const w = E("PlusIcon"),
                    C = E("TrashIcon");
                return h(), G(J, null, {
                    default: s(() => [e(T, null, {
                        default: s(() => [e(S, {
                            cols: "12"
                        }, {
                            default: s(() => [e(k, null, {
                                default: s(() => [e(P, {
                                    class: "text-h5"
                                }, {
                                    default: s(() => [n(" Local Account Manager "), e(A), e(p, {
                                        color: "primary",
                                        class: "mr-2",
                                        onClick: l[0] || (l[0] = a => b.value = !0)
                                    }, {
                                        default: s(() => [e(w, {
                                            "stroke-width": "1.5",
                                            size: "22"
                                        }), n(" Add User ")]),
                                        _: 1
                                    }), e(p, {
                                        color: "error",
                                        onClick: M
                                    }, {
                                        default: s(() => [n("Reset All Data")]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), e(H, null, {
                                    default: s(() => [n(" Manage your locally stored accounts. ")]),
                                    _: 1
                                }), e(I, null, {
                                    default: s(() => [e(K, {
                                        type: "info",
                                        class: "mb-4"
                                    }, {
                                        default: s(() => {
                                            var a, o, i;
                                            return [ue, n(" You are currently logged in as " + m((a = y.value) == null ? void 0 : a.firstName) + " " + m((o = y.value) == null ? void 0 : o.lastName) + " (" + m((i = y.value) == null ? void 0 : i.email) + ") ", 1)]
                                        }),
                                        _: 1
                                    }), e(W, null, {
                                        default: s(() => [ne, d("tbody", null, [(h(!0), O(ee, null, X(_.value, a => {
                                            var o, i;
                                            return h(), O("tr", {
                                                key: a.id,
                                                class: oe({
                                                    "bg-grey-lighten-4": a.id === ((o = y.value) == null ? void 0 : o.id)
                                                })
                                            }, [d("td", null, m(a.firstName) + " " + m(a.lastName), 1), d("td", null, m(a.email), 1), d("td", null, m(new Date(a.createdAt).toLocaleString()), 1), d("td", null, [e(p, {
                                                icon: "",
                                                color: "error",
                                                size: "small",
                                                onClick: x => B(a),
                                                disabled: a.id === ((i = y.value) == null ? void 0 : i.id)
                                            }, {
                                                default: s(() => [e(C, {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                })]),
                                                _: 2
                                            }, 1032, ["onClick", "disabled"])])], 2)
                                        }), 128))])]),
                                        _: 1
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }), e(F, {
                        modelValue: g.value,
                        "onUpdate:modelValue": l[2] || (l[2] = a => g.value = a),
                        "max-width": "500px"
                    }, {
                        default: s(() => [e(k, null, {
                            default: s(() => [e(P, {
                                class: "text-h5"
                            }, {
                                default: s(() => [n("Confirm Delete")]),
                                _: 1
                            }), e(I, null, {
                                default: s(() => {
                                    var a, o, i;
                                    return [n(" Are you sure you want to delete the user " + m((a = f.value) == null ? void 0 : a.firstName) + " " + m((o = f.value) == null ? void 0 : o.lastName) + " (" + m((i = f.value) == null ? void 0 : i.email) + ")? This action cannot be undone. ", 1)]
                                }),
                                _: 1
                            }), e(q, null, {
                                default: s(() => [e(A), e(p, {
                                    color: "primary",
                                    variant: "text",
                                    onClick: l[1] || (l[1] = a => g.value = !1)
                                }, {
                                    default: s(() => [n("Cancel")]),
                                    _: 1
                                }), e(p, {
                                    color: "error",
                                    variant: "flat",
                                    onClick: L
                                }, {
                                    default: s(() => [n("Delete")]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["modelValue"]), e(ae, {
                        modelValue: v.value,
                        "onUpdate:modelValue": l[4] || (l[4] = a => v.value = a),
                        color: V.value
                    }, {
                        actions: s(() => [e(p, {
                            variant: "text",
                            onClick: l[3] || (l[3] = a => v.value = !1)
                        }, {
                            default: s(() => [n("Close")]),
                            _: 1
                        })]),
                        default: s(() => [n(m(N.value) + " ", 1)]),
                        _: 1
                    }, 8, ["modelValue", "color"]), e(F, {
                        modelValue: b.value,
                        "onUpdate:modelValue": l[11] || (l[11] = a => b.value = a),
                        "max-width": "600px"
                    }, {
                        default: s(() => [e(k, null, {
                            default: s(() => [e(P, {
                                class: "text-h5"
                            }, {
                                default: s(() => [n("Create New User")]),
                                _: 1
                            }), e(I, null, {
                                default: s(() => [e(le, {
                                    onSubmit: se(D, ["prevent"])
                                }, {
                                    default: s(() => [e(J, null, {
                                        default: s(() => [e(T, null, {
                                            default: s(() => [e(S, {
                                                cols: "12",
                                                sm: "6"
                                            }, {
                                                default: s(() => [e(U, {
                                                    modelValue: r.value.firstName,
                                                    "onUpdate:modelValue": l[5] || (l[5] = a => r.value.firstName = a),
                                                    label: "First Name",
                                                    "error-messages": u.value.firstName,
                                                    required: ""
                                                }, null, 8, ["modelValue", "error-messages"])]),
                                                _: 1
                                            }), e(S, {
                                                cols: "12",
                                                sm: "6"
                                            }, {
                                                default: s(() => [e(U, {
                                                    modelValue: r.value.lastName,
                                                    "onUpdate:modelValue": l[6] || (l[6] = a => r.value.lastName = a),
                                                    label: "Last Name",
                                                    "error-messages": u.value.lastName,
                                                    required: ""
                                                }, null, 8, ["modelValue", "error-messages"])]),
                                                _: 1
                                            }), e(S, {
                                                cols: "12"
                                            }, {
                                                default: s(() => [e(U, {
                                                    modelValue: r.value.email,
                                                    "onUpdate:modelValue": l[7] || (l[7] = a => r.value.email = a),
                                                    label: "Email",
                                                    type: "email",
                                                    "error-messages": u.value.email,
                                                    required: ""
                                                }, null, 8, ["modelValue", "error-messages"])]),
                                                _: 1
                                            }), e(S, {
                                                cols: "12",
                                                sm: "6"
                                            }, {
                                                default: s(() => [e(U, {
                                                    modelValue: r.value.password,
                                                    "onUpdate:modelValue": l[8] || (l[8] = a => r.value.password = a),
                                                    label: "Password",
                                                    type: "password",
                                                    "error-messages": u.value.password,
                                                    required: ""
                                                }, null, 8, ["modelValue", "error-messages"])]),
                                                _: 1
                                            }), e(S, {
                                                cols: "12",
                                                sm: "6"
                                            }, {
                                                default: s(() => [e(U, {
                                                    modelValue: r.value.confirmPassword,
                                                    "onUpdate:modelValue": l[9] || (l[9] = a => r.value.confirmPassword = a),
                                                    label: "Confirm Password",
                                                    type: "password",
                                                    "error-messages": u.value.confirmPassword,
                                                    required: ""
                                                }, null, 8, ["modelValue", "error-messages"])]),
                                                _: 1
                                            })]),
                                            _: 1
                                        })]),
                                        _: 1
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }), e(q, null, {
                                default: s(() => [e(A), e(p, {
                                    color: "primary",
                                    variant: "text",
                                    onClick: l[10] || (l[10] = a => b.value = !1)
                                }, {
                                    default: s(() => [n("Cancel")]),
                                    _: 1
                                }), e(p, {
                                    color: "success",
                                    variant: "flat",
                                    onClick: D
                                }, {
                                    default: s(() => [n("Create User")]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                })
            }
        }
    });
export {
    me as
    default
};
//# sourceMappingURL=AccountManager-LT7Xn21b.js.map