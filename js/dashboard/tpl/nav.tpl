{@each list as it,k}
<li>
    {@if it.show == true }
        {@if k == 0 }
        <a class="menuhere current" href="${it.myurl}">
            <span class="glyphicon ${it.icon}"></span>${it.name}
        </a> 
        {@/if}
        {@if k != 0 }
        <a class="menuhere" href="${it.myurl}">
            <span class="glyphicon ${it.icon}"></span>${it.name}
        </a> 
        {@/if}
    {@/if}
    {@if it.show == false }
     <a class="fakemenuhere" href="javascript:void(0)">
        <span class="glyphicon ${it.icon}"></span>${it.name}
    </a>
    <ul class="nav navsub-add">
        {@each it.sub as it2}
        <li>
            <a class="submenu" href="${it2.myurl}">
                <span class="">${it2.subname}</span>
            </a>
        </li>
        {@/each}
    </ul>    
    {@/if}
</li> 
{@/each}




